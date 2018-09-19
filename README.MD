[Click me for browser preview](https://mateacademy-fe-study.github.io/wild-tigers.github.io/)


# WILD-TIGERS

## How to **install** project

1. `git clone https://github.com/MateAcademy-FE-study/wild-tigers.github.io.git`
2. `npm install`
3. `git checkout -b ` **Your branch name** (e.g. git checkout -b fixed-position-of-button-in-footer)
4. `git pull origin master`


## How to contribute

1. `git add --all` or choose files to be committed
2. `git commit -m "*comment to your commit*"`
3. `git push --set-upstream origin *your branch name*`
4.  make Pull Request (PR) on GitHub (if your PR resolves registered on GitHub issue, add phrase 'closes #[issue number]' to PR comment).
5.  wait for **minimum one approve** before merge to master
6.  switch back to master `git checkout master`
7. `git pull`
8. checkout to new branch (step 3 in install section)

## How to deploy

1. make sure PR is merged to master branch
2. in master branch `git pull`
3. run `gulp` to rebuild content in "build" folder
4. make sure there is no uncommited changes (files)
5. execute script deploy.sh in root folder by typing `./deploy.sh` to update branch gh-pages
6. after couple of minutes check result here https://mateacademy-fe-study.github.io/wild-tigers.github.io/
7. enjoy updated page 
