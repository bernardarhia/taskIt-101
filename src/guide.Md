### Task it (A task up created with react and local Forage)


#### **functionalities of the app** 
  1. User login authentication with auth0
  2. showing user details
  3. create new task
  4. move task to ***upcoming***, in ***progress mode***
  5. app will automatically move task to finish when the finish date is up
  6. Task can be deleted
  7. Newly deleted tasks goes into the ***trash*** component and stay there for two days before it will permanently delete itself
  8. Task in trash can be deleted before it auto deletes itself
  9. Task in all states can be deleted
  10. Task in ***new Task*** and in ***progress*** can be edited or modified

 - #### Major components
    - **Add task button**
        This Button appears in app the pages and will be used to add a new task

    - **Todo component**
        This component will display newly added tasks (It includes first 200 words of the description of the user's newly created task, The task title and the date the task was created)

    - **On going component**
        This component will display on going tasks (It includes first 200 words of the description of the user's task, The task title and the date the task was created)

    - **Done with component**
        This component will display tasks that are done with

    - **Trash component**
        If tasks are deleted, it will be stored here a maximum of two days before it will be deleted permanently 
    - **Modal input**
        This component will take task info and store it in the database.

#####DATABASE STRUCTURE FOR THE PROJECT
The database that we'll use it local forage
