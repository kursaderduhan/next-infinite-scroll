# Next-infinite-scroll Examples

Here's an example of how to use the package with custom loader and end message components:

```tsx
import React from "react"
import InfiniteScroll from "next-infinite-scroll"

// Custom loader component
const CustomLoader = () => {
  return <div className="custom-loader">Loading...</div>
}

// Custom end message component
const CustomEndMessage = () => {
  return <div className="custom-end-message">That's all!</div>
}

function App() {
  const loadMore = () => {
    // Logic to load more data goes here.
  }

  const refreshPage = () => {
    // Logic to refresh the page goes here.
  }

  return (
    <InfiniteScroll
      next={loadMore}
      pullDown={refreshPage}
      loader={<CustomLoader />}
      endMessage={<CustomEndMessage />}
    >
      {/* Infinite scroll content goes here */}
    </InfiniteScroll>
  )
}

export default App
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
