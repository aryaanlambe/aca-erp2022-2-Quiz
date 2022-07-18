// Developed by Aryaan Lambe for ACA task 1
import React, { useState } from 'react';

function App() {

  // Below is a hardcoded questionbank. Question did not state the use of DBMS and hence has been skipped
  const questions = [
    {
      questionText: 'Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace. (Choose one.)',
      answerOptions: [
        { answerText: 'update', isCorrect: false },
        { answerText: 'checkout', isCorrect: false },
        { answerText: 'clone', isCorrect: true },
        { answerText: 'import', isCorrect: false },
        { answerText: 'None of the Above', isCorrect: false },
      ],
    },
    {
      questionText: 'True or False? In Git, if you want to make your local repository reflect changes that have been made in a remote (tracked) repository, you should run the pull command.',
      answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: true },
      ],
    },
    {
      questionText: 'In Git, which error would you get if you try to push master-branch changes to a remote repository, and someone else pushed changes to that same branch while you were making your changes? (Choose one.)',
      answerOptions: [
        { answerText: 'Rejected', isCorrect: false },
        { answerText: '404', isCorrect: true },
        { answerText: '500', isCorrect: false },
        { answerText: 'Access denied', isCorrect: false },
        { answerText: 'Bad Request', isCorrect: false },
      ],
    },
    {
      questionText: 'Imagine that you just joined a development team that uses Git for version control and collaboration. To start contributing to the project, what Git operation would you most likely invoke first?',
      answerOptions: [
        { answerText: 'checkout', isCorrect: false },
        { answerText: 'clone', isCorrect: false },
        { answerText: 'export', isCorrect: false },
        { answerText: 'revert', isCorrect: true },
        { answerText: 'update', isCorrect: true },
      ],
    },
    {
      questionText: 'Now, imagine that you have a local repository, but other team members have pushed changes into the remote repository. What Git operation would you use to download those changes into your working copy?',
      answerOptions: [
        { answerText: 'checkout', isCorrect: false },
        { answerText: 'clone', isCorrect: false },
        { answerText: 'export', isCorrect: false },
        { answerText: 'pull', isCorrect: true },
        { answerText: 'update', isCorrect: true },
      ],
    },
    {
      questionText: 'The Git clone command does which of the following?',
      answerOptions: [
        { answerText: 'Creates a working directory', isCorrect: false },
        { answerText: 'Makes a local copy of the repository', isCorrect: false },
        { answerText: 'Commits a new branch', isCorrect: false },
        { answerText: 'a and b', isCorrect: true },
        { answerText: 'a,b,and c', isCorrect: true },
      ],
    },
    {
      questionText: 'How do I add a message to a commit?',
      answerOptions: [
        { answerText: '$ git message "Fix error in xxxx"', isCorrect: false },
        { answerText: '$ git add "Fix error in xxxx"', isCorrect: false },
        { answerText: '$ git commit "Fix error in xxxx"', isCorrect: false },
        { answerText: '$ git commit -m "Fix error in xxxx"', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the correct syntax for committing all changes with a message?',
      answerOptions: [
        { answerText: '$ git message -am "Fix error in xxxx"', isCorrect: false },
        { answerText: '$ git add -a "Fix error in xxxx"', isCorrect: false },
        { answerText: '$ git commit -a "Fix error in xxxx"', isCorrect: false },
        { answerText: '$ git commit -am "Fix error in xxxx"', isCorrect: true },
      ],
    },
    {
      questionText: 'Which comes first _____?',
      answerOptions: [
        { answerText: '$ git add', isCorrect: false },
        { answerText: '$ git commit', isCorrect: false },
      ],
    },
    {
      questionText: 'You can type “git status” at any time in a directory controlled by git to check the status of your files.',
      answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: 'We have just created a new file called “home.html”. Which of the following will add this file so that we can commit it in git?',
      answerOptions: [
        { answerText: '$ git add home.html', isCorrect: false },
        { answerText: '$ git add new', isCorrect: false },
        { answerText: '$ git add -a home.html', isCorrect: false },
        { answerText: '$ git git commit home.html', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands used to show all parameters in git?',
      answerOptions: [
        { answerText: '$ git config --list', isCorrect: false },
        { answerText: '$ git config -a', isCorrect: false },
        { answerText: '$ git config --all', isCorrect: false },
        { answerText: '$ git config --parameters --list', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands used to return to the master branch?',
      answerOptions: [
        { answerText: '$ git checkout origin', isCorrect: false },
        { answerText: '$ git checkout -b master', isCorrect: false },
        { answerText: '$ git checkout master', isCorrect: false },
        { answerText: ' $ git checkout branche', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands used to undo a commit?',
      answerOptions: [
        { answerText: '$ git reset <commit>', isCorrect: false },
        { answerText: '$ git revert <commit>', isCorrect: false },
        { answerText: '$ git reset --hard origin/master', isCorrect: false },
        { answerText: '$ git init', isCorrect: true },
      ],
    },
    {
      questionText: 'How to create a new branch and switch to it directly?',
      answerOptions: [
        { answerText: '$ git checkout <branch-name>', isCorrect: false },
        { answerText: '$ git branch <branch-name>', isCorrect: false },
        { answerText: '$ git checkout -b <branch-name>', isCorrect: false },
        { answerText: '$ git branch -new <branch-name>', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the git command that downloads your repository from GitHub to your computer?',
      answerOptions: [
        { answerText: '$ git push', isCorrect: false },
        { answerText: '$ git commit', isCorrect: false },
        { answerText: '$ git fork', isCorrect: false },
        { answerText: '$ git clone', isCorrect: true },
      ],
    },
    {
      questionText: 'What command is used to upload your code and changes to GitHub?',
      answerOptions: [
        { answerText: '$ git add', isCorrect: false },
        { answerText: '$ git upload', isCorrect: false },
        { answerText: '$ git push', isCorrect: false },
        { answerText: '$ git status', isCorrect: true },
      ],
    },
    {
      questionText: 'How to initialize the local repository with git?',
      answerOptions: [
        { answerText: '$ git start', isCorrect: false },
        { answerText: '$ git init', isCorrect: false },
        { answerText: '$ git pull', isCorrect: false },
        { answerText: '$ git clean', isCorrect: true },
      ],
    },
    {
      questionText: 'How do I get code from another repository on GitHub?',
      answerOptions: [
        { answerText: 'Forking through the GitHub interface.', isCorrect: false },
        { answerText: '$ git pull-request', isCorrect: false },
        { answerText: '$ git fork', isCorrect: false },
        { answerText: '$ git clone', isCorrect: true },
      ],
    },
    {
      questionText: 'How to check the status of your local repository since your last commit?',
      answerOptions: [
        { answerText: '$ git check', isCorrect: false },
        { answerText: '$ git commit', isCorrect: false },
        { answerText: '$ git diff', isCorrect: false },
        { answerText: '$ git status', isCorrect: true },
      ],
    },
    {
      questionText: 'How do I add files to a commit?',
      answerOptions: [
        { answerText: '$ git stage', isCorrect: false },
        { answerText: '$ git commit', isCorrect: false },
        { answerText: '$ git add', isCorrect: false },
        { answerText: '$ git reset', isCorrect: true },
      ],
    },
    {
      questionText: 'What shortcut to stage all the changes you have?',
      answerOptions: [
        { answerText: '$ git push -am “Message”', isCorrect: false },
        { answerText: '$ git commit add .', isCorrect: false },
        { answerText: '$ git commit .', isCorrect: false },
        { answerText: '$ git add .', isCorrect: true },
      ],
    },
    {
      questionText: 'Which command you use to check the history of your repository?',
      answerOptions: [
        { answerText: 'checkout', isCorrect: false },
        { answerText: 'clone', isCorrect: false },
        { answerText: 'export', isCorrect: false },
        { answerText: 'revert', isCorrect: true },
        { answerText: 'update', isCorrect: true },
      ],
    },
    {
      questionText: 'Imagine that you just joined a development team that uses Git for version control and collaboration. To start contributing to the project, what Git operation would you most likely invoke first?',
      answerOptions: [
        { answerText: '$ git checkout', isCorrect: false },
        { answerText: '$ git fetch', isCorrect: false },
        { answerText: '$ git log', isCorrect: false },
        { answerText: '$ git diff', isCorrect: true },
      ],
    },
    {
      questionText: 'After you add a file, it becomes',
      answerOptions: [
        { answerText: 'Committed', isCorrect: false },
        { answerText: 'Modified', isCorrect: false },
        { answerText: 'Staged', isCorrect: false },
        { answerText: 'Untracked', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following is true you when you use the following command?git add -A',
      answerOptions: [
        { answerText: 'All new and updated files are staged', isCorrect: false },
        { answerText: 'Files are staged in alphabetical order.', isCorrect: false },
        { answerText: 'All new files are staged', isCorrect: false },
        { answerText: 'Only updated files are staged', isCorrect: true },
      ],
    },
    {
      questionText: 'What command lets you create a connection between a local and remote repository?',
      answerOptions: [
        { answerText: 'git remote add origin', isCorrect: false },
        { answerText: 'git remote add new', isCorrect: false },
        { answerText: 'git remote new origin', isCorrect: false },
        { answerText: 'git remote origin', isCorrect: true },
      ],
    },
    {
      questionText: '.... is equivalent to fetch and merge',
      answerOptions: [
        { answerText: 'pull', isCorrect: false },
        { answerText: 'syncronize', isCorrect: false },
        { answerText: 'push', isCorrect: false },
        { answerText: 'fetch', isCorrect: true },
      ],
    },
    {
      questionText: 'How do you supply a commit message to a commit?',
      answerOptions: [
        { answerText: 'Git message "My first commit"', isCorrect: false },
        { answerText: 'Git add "My first commit"', isCorrect: false },
        { answerText: 'Git commit "My first commit"', isCorrect: false },
        { answerText: 'Git commit -m "Im coding!"', isCorrect: true },
      ],
    },
    {
      questionText: 'Whats a shortcut to staging all the changes you have?',
      answerOptions: [
        { answerText: 'Git commit add .', isCorrect: false },
        { answerText: 'Git commit .', isCorrect: false },
        { answerText: 'Git add .', isCorrect: false },
        { answerText: 'Git stage -a', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands is used in switching between branches?',
      answerOptions: [
        { answerText: 'Git branch', isCorrect: false },
        { answerText: 'Git checkout', isCorrect: false },
        { answerText: 'Git switch', isCorrect: false },
        { answerText: 'Git merge', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands will allow you to change branches?',
      answerOptions: [
        { answerText: '$ git checkout', isCorrect: false },
        { answerText: '$ git clone', isCorrect: false },
        { answerText: '$ git log', isCorrect: false },
        { answerText: '$ git diff', isCorrect: true },
      ],
    },
    {
      questionText: 'Which Command is used to show limited number of commits?',
      answerOptions: [
        { answerText: 'git fetch <remote>', isCorrect: false },
        { answerText: 'git log -n <limit>', isCorrect: false },
        { answerText: 'git config <limit>', isCorrect: false },
        { answerText: 'git status', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the area where uncommitted changes are temporarily held after adding?',
      answerOptions: [
        { answerText: 'Staging Area', isCorrect: true },
        { answerText: 'Unstaging Area', isCorrect: false },
      ],
    },
    {
      questionText: 'Command to check the created, modified, deleted files in gitbash before Commit?',
      answerOptions: [
        { answerText: 'git show', isCorrect: false },
        { answerText: 'git log', isCorrect: false },
        { answerText: 'git status', isCorrect: false },
        { answerText: 'all of the above', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following is not a Git configuration scope?',
      answerOptions: [
        { answerText: 'Local', isCorrect: false },
        { answerText: 'User', isCorrect: false },
        { answerText: 'System', isCorrect: false },
        { answerText: 'Global', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands will merge branch-a into the master branch?',
      answerOptions: [
        { answerText: 'git merge master and git checkout branch-a', isCorrect: false },
        { answerText: 'git checkout branch-a and git merge master', isCorrect: false },
        { answerText: 'git checkout master and git merge branch-a', isCorrect: false },
        { answerText: 'git merge branch-a and git checkout master', isCorrect: true },
      ],
    },
    {
      questionText: 'Git commit command use to',
      answerOptions: [
        { answerText: 'push changes from local repo to central repo', isCorrect: false },
        { answerText: 'stage changes', isCorrect: false },
        { answerText: 'push changes from staging area to local repo', isCorrect: false },
        { answerText: 'all of them', isCorrect: true },
      ],
    },
    {
      questionText: 'Which command should you use to initialize a new git repository?',
      answerOptions: [
        { answerText: 'Git bash', isCorrect: false },
        { answerText: 'Git install', isCorrect: false },
        { answerText: 'Git init', isCorrect: false },
        { answerText: 'Git start', isCorrect: true },
      ],
    },
    {
      questionText: 'Which file can you configure to ensure that certain files are never committed to the local Git repository?',
      answerOptions: [
        { answerText: 'Ignore.git', isCorrect: false },
        { answerText: '.gitignore', isCorrect: false },
        { answerText: 'gitignore.txt', isCorrect: false },
        { answerText: 'git.ignore', isCorrect: true },
      ],
    },
    {
      questionText: 'You can type git status at any point while in a git controlled directory to check the status of your files?',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the following is the default text editor for the Bash shell with a Windows-based Git install?',
      answerOptions: [
        { answerText: 'Bash', isCorrect: false },
        { answerText: 'Vim', isCorrect: false },
        { answerText: 'Emacs', isCorrect: false },
        { answerText: 'Notepad++', isCorrect: true },
      ],
    },
    {
      questionText: 'What command removes untracked files from your working directory.',
      answerOptions: [
        { answerText: 'git commit', isCorrect: false },
        { answerText: 'git clean -f <path>', isCorrect: false },
        { answerText: 'git clean', isCorrect: false },
        { answerText: 'git reset', isCorrect: true },
      ],
    },
    {
      questionText: 'Command use to connect remote repo with local repo',
      answerOptions: [
        { answerText: 'git remote add', isCorrect: false },
        { answerText: 'git init', isCorrect: false },
        { answerText: 'git connect repo', isCorrect: false },
        { answerText: 'git configure', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following is incorrect syntax?',
      answerOptions: [
        { answerText: 'git add Test.txt', isCorrect: false },
        { answerText: 'git pull origin master', isCorrect: false },
        { answerText: 'git push origin master', isCorrect: false },
        { answerText: 'None', isCorrect: true },
      ],
    },
    {
      questionText: 'How would you commit this with the message "Hello ACA"?',
      answerOptions: [
        { answerText: 'git commit -m "Hello ACA"', isCorrect: false },
        { answerText: 'git commit "Hello ACA"', isCorrect: false },
        { answerText: 'git commit .', isCorrect: false },
        { answerText: 'none of the above', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following commands will create a new branch?',
      answerOptions: [
        { answerText: 'git checkout new-branch', isCorrect: false },
        { answerText: 'git checkout -b new-branch', isCorrect: true },
        { answerText: 'git clone new-branch', isCorrect: false },
        { answerText: 'git create-branch new-branch', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following commands will stage your entire directory and every non-empty directory inside your current directory?',
      answerOptions: [
        { answerText: 'git status all', isCorrect: false },
        { answerText: 'git add .', isCorrect: false },
        { answerText: 'git commit all', isCorrect: false },
        { answerText: 'None of these', isCorrect: true },
      ],
    },
    {
      questionText: 'To make a new git branch, the git command is?',
      answerOptions: [
        { answerText: 'git branch', isCorrect: false },
        { answerText: 'git -b', isCorrect: false },
        { answerText: 'git new branch', isCorrect: false },
        { answerText: 'git checkout branch', isCorrect: true },
      ],
    },
    {
      questionText: 'Git commit -m < ? >, ? is for',
      answerOptions: [
        { answerText: 'file name to be commited', isCorrect: false },
        { answerText: 'comment', isCorrect: false },
        { answerText: 'repo url', isCorrect: false },
        { answerText: 'None of the above', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) { // Should the guessed question be correct
      setScore(score + 1); // Increment score
    }

    const nextQuetions = currentQuestion + 1; // Select next question
    
    if (nextQuetions < questions.length) { // If there are still questions pending, keep rendering them
      setCurrentQuestion(nextQuetions);
    }
    else { // If there are no more attemptable questions
      setShowScore(true)
    }
  }
  // Below code renders HTML code to display on web browser
  return (
    <>
      <h1 className='header'>Welcome to the ACA Git & GitHub Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default App;