# IMPORTANCE OF VCS (GIT) IN MODERN SOFTWARE DEVELOPMENT

## Scenario

# 1.

one friend(Tom) want to build chat app . he create folder and start to write code . he wrote all the message features and saved it .he told his friend about the project and his friend(Jerry) also want to collaborate on it and he told his friend about to write the notification features . he send the code through pendrive and his friend saw all the code files by inserting pendrive into his computer. **There is one problem arise if his friend want to know about code files he had to go through all the code line by line and know all the steps to know about projects. there is no any commands like `see changes`**. Jerry add notification features and return the pendrive . but when the Tom see the code he instantly shocked which is my code and what Jerry added into it .
**The second problems is there is no history of changes maintained. there is no idea which code is written by whom** in this condition if any bug seen into code then it is very difficult to inform Jerry about the code because the pendrive is in Tom hand. There is no any history maintained who has written bug into code .

# 2.

if Tom wants to create file like this file_v1. and added new features then saved to file_v2. In this way he has to write all by himself manually and also this is not efficient and boring work . file sizes increased

**so to solve this problem git comes into developer hand**

# Fear into eyes and heart : Before Git

we all have been there . suppose you are working on project, you reach milestone everything working just fine , and you are terrified of breaking what you just built. So you do what , for "safe" you copy all the folder and rename it **project_backup_dec28**.

An hour later you have **project_final**.Then **project_final_v2**. By the midnight, you are staring at **project_final_v2_REALLY_FINAL_FIXED_PLEASE**.

This is **Pendrive Problem**, and it is exactly why **Version Control Systems (VCS) were created**.

## The Pendrive Analogy : Chaos in Flash Drive

Before tools like Git existed, collaborating on code felt like high-stakes game of hot potato. Imagine there are three developers team - Alice, Bob and Charlie working on website.

1. **The Hand-off:** Alice finished Navbar and she copies onto pendrive (or attaches .zip file to an email) and hands it to Bob.
2. **The Conflict:** while Bob is styling the CSS, Charlie realizes there is typo in the HTML Alice wrote. Charlie makes a quick fix on his local version.
3. **The Disaster:**: Bob finishes his styling work and sends his version back to the team . Because Bob's version didn't include Charlie's typo fix, Charlie's work is effectively "deleted" when the team adopts Bob's new "final" version.

## The "Folder Graveyard"

without system . your folder looks like digital graveyard of indecision

- **index.html**
- **index_old.html**
- **index_new_v3.html**
- **index_DO_NOT_DELETE.html**

## The Problems Faced (The "Dark Ages")

Before VCS, developers faced three "deal-breakers" problems that made professional software development impossible to scale:

1. The Overwrite Nightmare
   when two people edited the same file simultaneously, the person who saved last "won". The other person's work simply vanished like **pouring water into sand**
   there was no way to "merge" two sets of changes together automatically.

2. Zero Accountability (The "Who Broke it ?" Mystery)
   if the website crashed at 2:00 AM , there has no way to see what was changed, who changed it , or why. (**Ye RAAZ BHI USIKE SATH CHALA GAYA**). you couldn't look back at a history log; you just had to start digging through all the thousand lines of code manually.

3. No "Time Machine"
   In the pendrive era , if you realized a feature you wrote 3 days ago was actually better than what you have now, you were out of luck - unless you were disciplined enough to have a manual backup of every single days of work .who will do this then there will be again **Graveyard of Folders**

## The Modern Solution : Version Control

Version Control Systems, like Git replaced physical pendrive all that nightmares of developers

### why it became mandatory:

- Branching : Developers can "branch" off the main code, work into his private sandbox and only brings back when they are tested and ready to merge.
- Merging : VCS can intelligently combine changes from different developers. if Alice edits top of file and Bob edits bottom, the system merges them **seamlessly**.
- The Log: Every change (commit) comes with a message, an author , and a timestamp. it's complete biography of the project

## Conclusion

The "pendrive problem" wasn't just about losing files; it was about the fear of collaborating. VCS removed that fear, allowing developers to experiment, fail fast , and build massive systems together without stepping on each other's toes .
**Git keeps biography(Kundli) of projects and also developers who commits changes into code**

If you’re still naming folders final_v2, it’s time to put down the pendrive and initialize your first Git repository. Your future self (and your teammates) will thank you.

### Resources

- BLOG URL : (https://dipeshchaudhary.hashnode.dev/importance-of-vcs-git-in-modern-software-development)
