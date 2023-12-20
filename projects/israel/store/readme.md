דרישות:
1. מערכת עובדת בטכנולוגיות react+node+mongodb.
2. מימוש של CRUD (create, read, update, delete).
3. כניסה למשתמשים רשומים עם הרשאות למנהל והרשאות למשתמש רגיל.

מוצרים

const prodct = [
    {
        name: string,
        price: stirng,
        image_url: string,
    },
    ...
];

1. react + mui
2. node
3. mongodb

משתמשים
1. כניסה עם גוגל
2. הרשאות לוקאליות
3. הוספה, מחיקה, עדכון

4. const users = [
    {
        name: string,
        email: string,
        role: "user" | "admin",
    }
]


שלבים
- npx create-react-app store --template typescript
- npm install @mui/material @emotion/react @emotion/styled
- cd store
- npm run start
- npm run build (create static files into 'build' folder)
put all react files into folder 'front'. 

בניית שרת
- npm init -y (create package.json)
create file 'server.js'
- npm install express 

