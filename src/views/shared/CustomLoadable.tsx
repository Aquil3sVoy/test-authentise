import React from 'react';

function LoadingComponent() {
  // Use progressBar or loading component here
  return <div />;
}

export default function CustomLoadable(opts) {
  const LazyComponent = React.lazy(opts.loader);

  return (props) => (
    <React.Suspense fallback={<LoadingComponent />}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}
