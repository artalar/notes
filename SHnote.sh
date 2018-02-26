
#######
# SSH #
#######

# > ssh-keygen -t rsa -b 4096 -C "user@2domen.1domen" -f ~/.ssh/github
## copy publick key to server
# > xclip -sel clip < ./github.pub

# > nano ~./ssh/config
# Host github github.com
#     HostName github.com
#     IdentityFile ~/.ssh/github
#     User user@2domen.1domen

## test connection
# > ssh -T git@github.com