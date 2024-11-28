# Fitness-Tracker-App
Description: An app to track workouts and health goals. Key Features: Log exercises and calories burned. Track daily water intake. Set and monitor fitness goals. Generate progress reports. Notifications for workout reminders. Tech Stack: ASP.NET Core, ReactJS, Tailwind CSS, SQL Server.

User Flow
1. Registration and Login
User Action:
User registers by providing name, email, password, height, weight, and optionally date of birth and gender.
Logs in using email and password.
Backend Process:
Store hashed password securely.
Authenticate using JWT tokens for subsequent requests.
Frontend Process:
Forms for registration and login with error handling.
Redirect to the dashboard upon successful login.
2. Dashboard
User Action:
Access a personalized dashboard showing:
Recent workouts.
Daily calorie intake summary.
Progress towards goals.
Quick stats (e.g., steps, active minutes, sleep).
Backend Process:
Fetch user’s latest data (workouts, nutrition, goals).
Frontend Process:
Dynamic widgets to display fetched data.
3. Add Workout
User Action:
Logs a new workout by selecting an activity, start time, end time, and optionally calories burned.
Backend Process:
Store workout data, calculate duration if endTime is provided.
Frontend Process:
Form with validation for logging workouts.
4. Track Nutrition
User Action:
Logs daily meals with calorie, protein, carb, and fat details.
Backend Process:
Aggregate daily nutrition data for trends.
Frontend Process:
Table with daily logs and a form to add new entries.
5. Set and View Goals
User Action:
Sets fitness or nutrition goals (e.g., run 10 km, consume 1500 calories/day).
Views current and completed goals.
Backend Process:
Store goals and track progress.
Frontend Process:
Show progress bars for each goal.
6. Health Metrics
User Action:
Logs weight, BMI, or body fat percentage periodically.
Backend Process:
Store health metrics and compute trends.
Frontend Process:
Graphs or charts showing progress over time.
7. Sleep Tracking
User Action:
Logs sleep duration and quality (e.g., Good, Average, Poor).
Backend Process:
Store and analyze sleep patterns.
Frontend Process:
Sleep log view and analytics dashboard.
8. Achievements
User Action:
Earns badges for milestones (e.g., first workout, 10,000 calories burned).
Backend Process:
Award achievements based on predefined criteria.
Frontend Process:
Display earned badges dynamically.
