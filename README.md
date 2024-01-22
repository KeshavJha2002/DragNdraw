# 🎨 DragNdraw

DragNdraw, a React and TypeScript-powered drawing tool inspired by Excalidraw, brings creativity to life with a touch of hand-drawn charm using Rough.js. Crafted as a side project for learning and exploration, DragNdraw offers a feature-rich experience without the constraints of responsiveness.

## 🚀 Technologies

- [**Vite**](https://vitejs.dev/)
- [**React.js**](https://react.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**Rough.js**](https://roughjs.com/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**Material-UI**](https://mui.com/)
- [**tippy-js**](https://www.npmjs.com/package/@tippyjs/react)
- [**perfect-freehand**](https://www.npmjs.com/package/perfect-freehand)

## 🎨 Features

Discover the capabilities of ArtistryCanvas:

- **Diverse Tools**: Choose from pencils, lines, rectangles, and text tools to unleash your creativity.

- **Draw and Manipulate**: Click and drag on the canvas to draw. Easily move and resize elements for precise control over shapes.

- **Text Editing**: Click anywhere on the canvas and start typing to add or edit text seamlessly.

- **Zoom In and Out**: Use Ctrl + Scroll or dedicated buttons to zoom in for detail or out to view the entire canvas.

- **Pan Across the Canvas**: Hold the Space bar, drag, or use the middle mouse button to navigate the canvas effortlessly.

### ⚡ Keyboard Shortcuts:

Boost your productivity with these handy shortcuts:

- **Canvas Navigation**: Press the Space bar and drag or use the middle mouse button.
- **Undo**: Ctrl + Z.
- **Redo**: Ctrl + Y or Ctrl + Shift + Z.
- **Zoom In**: Ctrl + Plus.
- **Zoom Out**: Ctrl + Minus.

## 👩‍🍳 The Journey

Embark on the journey of creating ArtistryCanvas:

1. **Canvas Foundation**: Initiate the project by rendering a canvas with Rough.js, setting the stage for all drawings.

2. **Drawing and Interaction**: Implement drawing functionalities for lines, rectangles, and other shapes. Enable users to move and resize elements for enhanced flexibility.

3. **Text Tool**: Introduce the ability to add and edit text directly on the canvas for labeling and annotations.

4. **Zoom and Pan Tools**: Enhance user experience with zoom and pan features for navigating larger drawings.

5. **Undo and Redo**: Implement features to undo and redo actions, ensuring mistakes can be rectified seamlessly.

6. **Freehand Drawing and Styling**: Add freehand drawing for a natural sketching experience. Design the user interface for a user-friendly and visually appealing experience.

7. **Testing**: Incorporate testing with Cypress and Testing Library for end-to-end testing of various functionalities.

8. **Documentation and Learning**: Document each feature and the behind-the-scenes processes to solidify understanding and learning.

## 📚 Key Takeaways

ArtistryCanvas has been a platform for acquiring key skills and insights:

### 🧠 `useHistory` Hook:

- **Strategic Thinking**: Creating the `useHistory` hook fostered strategic thinking in managing undo, redo, and saving actions.

### 📏 Coordinates and Measurements:

- **Precision**: Improved precision in working with shapes and points, crucial for determining point inclusion in shapes.

### 🎨 Discovering Rough.js:

- **Creative Tools**: Discovered Rough.js, an exciting tool for imparting a hand-drawn appearance to graphics.

### 🔍 Deep Dive into Functions:

- **Function Understanding**: Explored and comprehended the `getSvgPathFromStroke` function for turning drawing movements into smooth paths.

### ✏️ Managing Points and Drawing:

- **Data Handling**: Learned to collect and utilize points from drawings, involving effective data management.

### 🎣 React Hooks and Rendering:

- **New Insight**: Gained knowledge about `useLayoutEffect` for ensuring changes precede screen updates, particularly useful for drawing functions.

### 🎡 Advanced Event Handling:

- **Interactive Features**: Worked with the wheel event listener to introduce zooming and panning, enhancing interactivity.

### 📈 Overall Growth:

DragNdraw isn't just a tool; it's a journey of problem-solving, continuous learning, and skill enhancement for future endeavors.

## 💡 Future Improvements

While DragNdraw is a powerful tool, there's always room for enhancement:

- **Expanded Color Palette**: Introduce a broader range of colors in the color picker.
- **Diverse Tools**: Add tools like circles, erasers, and more for increased creative options.
- **Varied Shapes**: Include additional shapes such as triangles and stars.
- **Efficient Shortcuts**: Expand the list of keyboard shortcuts for improved efficiency.
- **Themes**: Incorporate more themes like dark mode and light mode.
- **Text Customization**: Enhance text options with features like font size and font color.
- **Code Refinement**: Create a type for Rough.js elements to enhance code organization.
- **Check [TODO](./TODO.md)** to explore all the exciting future updates on the horizon. 🚀

## 🚀 Running the Project

To experience DragNdraw locally:

1. Clone the repository to your machine.
2. Run `npm install` or `yarn` in the project directory.
3. Execute `npm run start` or `yarn start` to launch the project.
4. Visit [http://localhost:5173](http://localhost:5173) (or the address shown in your console) to explore the app.

Feel the magic of creativity with DragNdraw! ✨
