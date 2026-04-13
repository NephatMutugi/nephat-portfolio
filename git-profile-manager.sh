#!/bin/bash
#
# Git Profile Manager
# ------------------
# A script to switch between different Git profiles for different organizations
# with special handling for commit signing requirements.
#
# Profiles:
# - ignitetech: Standard configuration
# - safaricom: Requires SSH key commit signing
# - trilogy: Standard configuration
# - personal: Standard configuration
#
# Usage: ./git-profile-manager.sh [profile] [scope]
#   profile: ignitetech, safaricom, trilogy, personal, or status
#   scope: --global (default) or --local (for repository-specific config)
#
# Examples:
#   ./git-profile-manager.sh ignitetech      # Switch to IgniteTech profile globally
#   ./git-profile-manager.sh trilogy --local # Switch to Trilogy profile for current repo only
#   ./git-profile-manager.sh status          # Show current configuration

# ANSI color codes for better output formatting
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Default to global scope if not specified
SCOPE="--global"
if [ "$2" == "--local" ]; then
    SCOPE="--local"
    echo -e "${BLUE}Setting configuration for current repository only${NC}"
fi

# Function to display the git configuration
show_git_config() {
    local scope=$1
    local email=$(git config $scope user.email)
    local name=$(git config $scope user.name)
    local sign=$(git config $scope commit.gpgSign)
    local format=$(git config $scope gpg.format)
    local key=$(git config $scope user.signingkey)
    
    echo -e "${BOLD}Current Git Configuration ($scope):${NC}"
    echo -e "${BLUE}Name:${NC}           $name"
    echo -e "${BLUE}Email:${NC}          $email"
    
    if [ "$sign" == "true" ]; then
        echo -e "${BLUE}Signing:${NC}        ${GREEN}Enabled${NC}"
        echo -e "${BLUE}Signing Format:${NC} $format"
        echo -e "${BLUE}Signing Key:${NC}    $key"
    else
        echo -e "${BLUE}Signing:${NC}        ${YELLOW}Disabled${NC}"
    fi
}

# Function to verify SSH key exists
verify_ssh_key() {
    local key_path=$1
    if [ ! -f "$key_path" ]; then
        echo -e "${RED}Error: SSH key not found at $key_path${NC}"
        echo -e "${YELLOW}Run the following to create the key:${NC}"
        echo -e "ssh-keygen -t ed25519 -C \"nmuchiri@safaricom.co.ke\""
        echo -e "When prompted, save the key to $key_path"
        return 1
    fi
    return 0
}

# Function to verify allowed signers file exists
verify_allowed_signers() {
    local file_path=$1
    if [ ! -f "$file_path" ]; then
        echo -e "${YELLOW}Creating allowed signers file at $file_path${NC}"
        touch "$file_path"
        echo "nmuchiri@safaricom.co.ke namespaces=\"git\" $(cat ~/.ssh/saf-key.pub)" >> "$file_path"
    fi
    return 0
}

# Configure IgniteTech profile
configure_ignitetech() {
    echo -e "${BOLD}Setting up IgniteTech Git profile...${NC}"
    
    git config $SCOPE user.name "Nephat Muchiri"
    git config $SCOPE user.email "nephat.muchiri@ignitetech.com"
    git config $SCOPE commit.gpgSign false
    
    # Clean up signing configuration if in local scope
    if [ "$SCOPE" == "--local" ]; then
        git config --unset-all $SCOPE gpg.format || true
        git config --unset-all $SCOPE user.signingkey || true
    fi
    
    echo -e "${GREEN}✓ Successfully configured IgniteTech Git profile${NC}"
    return 0
}

# Configure Safaricom profile
configure_safaricom() {
    echo -e "${BOLD}Setting up Safaricom Git profile...${NC}"
    
    # Verify SSH key exists
    if ! verify_ssh_key ~/.ssh/saf-key.pub; then
        echo -e "${RED}Can't set up Safaricom profile without SSH key${NC}"
        return 1
    fi
    
    # Verify allowed signers file
    verify_allowed_signers ~/.ssh/allowed_signers
    
    # Configure Git
    git config $SCOPE user.name "Nephat Muchiri"
    git config $SCOPE user.email "nmuchiri@safaricom.co.ke"
    git config $SCOPE user.signingkey ~/.ssh/saf-key.pub
    git config $SCOPE gpg.format ssh
    git config $SCOPE gpg.ssh.allowedSignersFile ~/.ssh/allowed_signers
    git config $SCOPE commit.gpgSign true
    
    echo -e "${GREEN}✓ Successfully configured Safaricom Git profile${NC}"
    return 0
}

# Configure Trilogy profile
configure_trilogy() {
    echo -e "${BOLD}Setting up Trilogy Git profile...${NC}"
    
    # Configure Git
    git config $SCOPE user.name "Nephat Muchiri"
    git config $SCOPE user.email "nephat.muchiri@trilogy.com"
    git config $SCOPE commit.gpgSign false
    
    # Clean up signing configuration if in local scope
    if [ "$SCOPE" == "--local" ]; then
        git config --unset-all $SCOPE gpg.format || true
        git config --unset-all $SCOPE user.signingkey || true
    fi
    
    echo -e "${GREEN}✓ Successfully configured Trilogy Git profile${NC}"
    return 0
}

# Configure Personal profile
configure_personal() {
    echo -e "${BOLD}Setting up Personal Git profile...${NC}"
    
    # Configure Git
    git config $SCOPE user.name "Nephat Muchiri"
    git config $SCOPE user.email "muchirinephat5@gmail.com"
    git config $SCOPE commit.gpgSign false
    
    # Clean up signing configuration if in local scope
    if [ "$SCOPE" == "--local" ]; then
        git config --unset-all $SCOPE gpg.format || true
        git config --unset-all $SCOPE user.signingkey || true
    fi
    
    echo -e "${GREEN}✓ Successfully configured Personal Git profile${NC}"
    return 0
}

# Display help text
show_help() {
    echo -e "${BOLD}Git Profile Manager${NC}"
    echo "A script to switch between different Git profiles with proper commit signing."
    echo
    echo -e "${BOLD}Usage:${NC}"
    echo "  $0 [profile] [scope]"
    echo
    echo -e "${BOLD}Profiles:${NC}"
    echo "  ignitetech  - For IgniteTech projects"
    echo "  safaricom   - For Safaricom projects (with commit signing)"
    echo "  trilogy     - For Trilogy projects"
    echo "  personal    - For personal projects"
    echo "  status      - Display current Git configuration"
    echo
    echo -e "${BOLD}Scope:${NC}"
    echo "  --global    - Apply settings globally (default)"
    echo "  --local     - Apply settings to current repository only"
    echo
    echo -e "${BOLD}Examples:${NC}"
    echo "  $0 ignitetech        # Switch to IgniteTech profile globally"
    echo "  $0 trilogy --local   # Switch to Trilogy profile for current repo only"
    echo "  $0 status            # Show current configuration"
}

# Main script logic
case "$1" in
    ignitetech)
        configure_ignitetech
        if [ $? -eq 0 ]; then
            show_git_config $SCOPE
        fi
        ;;
        
    safaricom)
        configure_safaricom
        if [ $? -eq 0 ]; then
            show_git_config $SCOPE
        fi
        ;;
        
    trilogy)
        configure_trilogy
        if [ $? -eq 0 ]; then
            show_git_config $SCOPE
        fi
        ;;
        
    personal)
        configure_personal
        if [ $? -eq 0 ]; then
            show_git_config $SCOPE
        fi
        ;;
        
    status)
        echo -e "${BOLD}Git Configuration Status:${NC}"
        echo -e "${YELLOW}Global Configuration:${NC}"
        show_git_config "--global"
        
        if [ -d .git ] || git rev-parse --git-dir > /dev/null 2>&1; then
            echo
            echo -e "${YELLOW}Local Repository Configuration:${NC}"
            show_git_config "--local"
        fi
        ;;
        
    *)
        show_help
        echo
        echo -e "${YELLOW}Current Configuration:${NC}"
        show_git_config "--global"
        ;;
esac

# Show tips for Safaricom users
if [ "$1" == "safaricom" ]; then
    echo
    echo -e "${YELLOW}Remember:${NC}"
    echo "1. Your commits will now be automatically signed"
    echo "2. If you need to verify a commit's signature, use: git log --show-signature"
    echo "3. Make sure you've added your SSH public key to GitLab"
fi

exit 0
