# Next Infinite Scroll

`next infinite scroll` is a React component that helps you implement infinite scrolling in your React applications. This component automatically loads more content as users scroll to the bottom of the page. It also allows users to refresh the page by pulling it down.

## Installation

You can install the package in your project using npm or yarn:

```bash
npm install next-infinite-scroll
# or
yarn add next-infinite-scroll
```
## Usage

Once you have added the package to your project, usage is straightforward. Here's a basic example:

```javascript
import React from 'react';
import InfiniteScroll from 'next-infinite-scroll';

// ...

function App() {
  // These functions represent loading more data and refreshing the page.
  const loadMore = () => {
    // Logic to load new data goes here.
  };

  const refreshPage = () => {
    // Logic to refresh the page goes here.
  };

  return (
    <InfiniteScroll
      next={loadMore}
      pullDown={refreshPage}
    >
      <!-- Infinite scroll content goes here -->
      <!-- For example, a list or cards -->
    </InfiniteScroll>
  );
}

export default App;
```

## Props

The `next-infinite-scroll` component accepts the following props:

- `next` (function): Represents the function to load more data. This function is automatically called when the user reaches the bottom of the page.

- `pullDown` (function): Represents the function to refresh the page. This function is called when the user pulls the page down from the top.

- `feedCount` (boolean): Indicates whether there is a count of remaining items to be displayed.

- `pullDownToRefreshTopDistance` (number): Specifies the distance from the top at which the pull-to-refresh action is triggered.

- `initialLoadingCount` (number): Defines the initial loading count.

- `externalDistance` (number): Sets the external distance used for triggering the loading of more data.

- `isRefreshing` (boolean): Indicates whether the component is currently in a refreshing state.

- `isInitialLoading` (boolean): Indicates whether the component is in its initial loading state.

- `children` (React node): The content that you want to apply infinite scrolling to.

- `loader` (any): Custom loader component.

- `endMessage` (any): Custom end message component.

## Examples

For more examples and details on how to use the package, you can visit the [examples directory](examples).

Here's an example of how to use the package with custom loader and end message components:

```javascript
import React from 'react';
import InfiniteScroll from 'next-infinite-scroll';

// Custom loader component
const CustomLoader = () => {
  return (
    <div className="custom-loader">
      Loading...
    </div>
  );
};

// Custom end message component
const CustomEndMessage = () => {
  return (
    <div className="custom-end-message">
      That's all!
    </div>
  );
};

function App() {
  const loadMore = () => {
    // Logic to load more data goes here.
  };

  const refreshPage = () => {
    // Logic to refresh the page goes here.
  };

  return (
    <InfiniteScroll
      next={loadMore}
      pullDown={refreshPage}
      loader={<CustomLoader />}
      endMessage={<CustomEndMessage />}
    >
      {/* Infinite scroll content goes here */}
    </InfiniteScroll>
  );
}

export default App;
```

## Contributions

Contributions to this project are welcome! If you have any suggestions, find any issues, or want to contribute to the development, please feel free to do so. Here are a few guidelines to get you started:

- **Reporting Issues**: If you encounter any issues or bugs, please open an issue on the [GitHub repository](https://github.com/kursaderduhan/next-infinite-scroll).

- **Feature Requests**: If you have ideas for new features or improvements, you can also open an issue to discuss them.

- **Pull Requests**: If you'd like to contribute directly, you can fork the repository, create a branch, make your changes, and then submit a pull request. Your contributions will be greatly appreciated!

## License

This package is open-source and is distributed under the [MIT License](LICENSE).