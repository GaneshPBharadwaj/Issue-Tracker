# Issue Tracker Application

This Node.js + EJS application is designed to track issues/bugs for a project. Inspired by platforms like GitHub's issue tracker, it offers a range of features to manage projects and their related bugs effectively.

## Features

### Home Page
- Display a list of projects.
- Provide a button to create a new project, which, upon creation, appears in the list.

### Create Project Page
- Accept fields such as Name, Description, and Author to create a project.

### Project Detail Page
- Redirect users from the home page to this page upon clicking on a project.
- Display bugs related to the selected project.
- Allow users to:
  - Filter by multiple labels simultaneously.
  - Filter by author.
  - Search by title and description.
  - Create a new issue.

### Create Issue Page
- Enable users to create an issue for a project.
- Accept fields like Title, Description, and Labels (with autocomplete for existing labels).
