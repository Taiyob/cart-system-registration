# React + Vite
<!-- 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-  -->

Three Features of this project:
. Users can show the title name which course is he select.
. At the same time, it will provide you the sum of credit amount.
. And also remind you that how much credit you have.

State management discription:
I build my application with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.

The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.

In order to implement state in my components, I use a hook called useState. First I import the hook from React: import { useState } from 'react'. Then I initialize the state: 
    const [titles,setTitles] = useState([]);
    const [credits,setCredits] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(20);

After the update would be using the useEffect hook. It execute a function after every component re-render (by default) or after any particular variable we declare changes.  
useEffect(()=>{
        fetch('data.json')
        .then(response=>response.json())
        .then(data=>setCourses(data));
    },[])


State management is one of the most complicated topics when it comes to front end development. And you can see how many people have tried to make it work in a predictable and scalable way, but also in ways that are clean and easy to use.

Specially in the last years, a lot of good tools have come up offering nice ways to deal with state management.