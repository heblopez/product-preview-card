# Make It Real - Product Preview Card

This is a solution to the Product Preview Card project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for your device's screen size
- View hover and focus for interactive elements

### Screenshot

![Desktop version](/src/assets/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

This project helped me to reinforce the use of Tailwind CSS, as it is a utility-first CSS framework that allows for rapid development and styling of components.

```tsx
  <article className='bg-white rounded-lg overflow-hidden max-w-[425px] mx-auto md:max-w-[600px] md:flex md:items-stretch md:justify-center md:gap-4'>
    <figure className='md:self-stretch md:w-1/2'>...</figure>
    <div className='p-6 gap-2 flex flex-col md:w-1/2 md:self-center'>
      <p className='text-xs uppercase tracking-[0.25rem] mb-1'>Perfume</p>
      <h1>...</h1>
      <p>...</p>
      <div className='flex items-center my-2 justify-start gap-5'>
        <p>...</p>
        <p className='text-paragraph line-through text-xs'>$169.99</p>
      </div>
      <button className='bg-primary text-white rounded-md p-3 flex gap-3 items-center justify-center'>
        <img src={iconCart} alt="Cart icon" />
        <p className='font-bold'>Add to Cart</p>
      </button>
    </div>
  </article>
```

### Continued development

Working on this project made me realize the importance of using Tailwind CSS to style components, as it is a utility-first CSS framework that allows for rapid development and styling of components.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - This is the official Tailwind CSS website, where you will find all the Tailwind classes we have available to use, examples of use and how to create classes with custom settings.

## Author

- Website - [Heberth López](https://www.heblopez.web.app)

## Acknowledgments

A special thanks to the MakeItReal team for the knowledge and support provided in each class and the feedback received on each project.