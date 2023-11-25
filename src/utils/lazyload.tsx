import React, { ComponentType } from 'react';

const withLazyLoading = (
  getComponent: () => Promise<{ default: ComponentType<any> }>,
) => {
  return class extends React.Component {
    state = {
      LazyComponent: null as ComponentType<any> | null,
    };

    async componentDidMount() {
      try {
        const { default: LazyComponent } = await getComponent();
        this.setState({ LazyComponent });
      } catch (error) {
        console.error('Error while loading component:', error);
        // Handle errors or set a fallback component if needed
      }
    }

    render() {
      const { LazyComponent } = this.state;

      if (!LazyComponent) {
        // You can render a loading indicator here or return null
        return null;
      }

      // Render the LazyComponent once it's available
      const LazyComp = LazyComponent as ComponentType<any>; // Type assertion
      return <LazyComp {...this.props} />;
    }
  };
};

export default withLazyLoading;
