// import { useState } from "react";

// function MyComponent({ count = 0, increment, styles }) {
//   return (
//     <div style={styles}>
//       <p>Счетчик: {count}</p>
//       <button onClick={increment}>Увеличить</button>
//     </div>
//   );
// }

// function MyComponent2({ count = 10, increment, styles }) {
//   return (
//     <div style={styles}>
//       <p>Второй Счетчик: {count}</p>
//       <button onClick={increment}>Увеличить</button>
//     </div>
//   );
// }

// function MyComponent3({ count = 20, increment, styles }) {
//   return (
//     <div style={styles}>
//       <p>Третий Счетчик: {count}</p>
//       <button onClick={increment}>Увеличить</button>
//     </div>
//   );
// }

// function withCounter(WrappedComponents, styles) {
//   function WithCounterComponent(props) {
//     const [count, setCount] = useState(props.initialCount || 0);

//     const increment = () => {
//       setCount(count + 1);
//     };

//     return (
//       <WrappedComponents
//         styles={styles}
//         count={count}
//         increment={increment}
//         {...props}
//       />
//     );
//   }

//   return WithCounterComponent;
// }

// export const EnhancedComponent1 = withCounter(MyComponent, {
//   backgroundColor: "red",
// });


// export const EnhancedComponent2 = withCounter(MyComponent2, {
//   backgroundColor: "blue",
// });
// export const EnhancedComponent3 = withCounter(MyComponent3, {
//   backgroundColor: "green",
// });


import React, { useState, type CSSProperties } from "react";

// 👇 Define the prop types for the wrapped component
interface MyComponentProps {
  count?: number;
  increment: () => void;
  styles: CSSProperties;
}

// 👇 Wrapped component with typed props
function MyComponent({ count = 0, increment, styles }: MyComponentProps) {
  return (
    <div style={styles}>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
}

// 👇 Props that can be passed to HOC
interface WithCounterProps {
  initialCount?: number;
}

// 👇 Higher Order Component definition
function withCounter<P extends object>(
  WrappedComponent: React.ComponentType<P & MyComponentProps>,
  styles: CSSProperties
) {
  // Inner component that manages the count state
  function WithCounterComponent(props: Omit<P, keyof MyComponentProps> & WithCounterProps) {
    const [count, setCount] = useState<number>(props.initialCount || 0);

    const increment = () => {
      setCount(prev => prev + 1);
    };

    return (
      <WrappedComponent
        {...(props as P)}
        count={count}
        increment={increment}
        styles={styles}
      />
    );
  }

  return WithCounterComponent;
}

// 👇 Use the HOC and export
export const EnhancedComponent1 = withCounter(MyComponent, {
  backgroundColor: "red",
});
