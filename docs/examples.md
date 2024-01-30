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
