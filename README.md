# Portfiolio

Git
create a git repo in github

1. git init
2. git add .
3. git commit -m "Message"
4. git remote add origin <HTTPS link of repo> i.e.https://github.com/ramyaagowri/new.git
5. git push (if checkout to required branch) else git push origin main or master

To add user name and email to local (used for commit messages in editor)

1. git config --global user.name "RamyaaGowri"
2. git config --global user.email "ramyaagowrik@gmail.com"

To remove origin

1. git remote remove origin

common git command

1. git log // get list og commits
2. git status
3. git config --list // to get config details
4. git commit
5. git commit -m "message" --amend (it replaces the latest commit but cannot be done when there the perios code is pushed)
6. git reset <file ,folder or . (all)> to reset commit or staged but there are soft and hard resets also
7. git checkout -- <Filename> // it deletes the unstaged or uncommited changes
8. git checkout <hash> // to move the head to the required commit (the log after this will only show the commits before it )
9. git log --all // to get all the commits sometimes
10. git log --all --graph //To show the tree of commits
11. git checkout <hash> <filename> // to get certain or all changes from version 1 to the current version 2(master or head)
12. git branch <updated-version1> // else the sub branch will be trackless
