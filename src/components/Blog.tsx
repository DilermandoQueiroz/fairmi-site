import React from 'react';

const Blog = ({ children }: { children: React.ReactNode }) => {
    // Wrap each child in a div that controls its maximum width and responsiveness
    const wrappedChildren = React.Children.map(children, child => (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            {child}
        </div>
    ));

    return (
        <div className="w-full flex flex-wrap justify-center md:justify-between items-stretch">
            {wrappedChildren}
        </div>
    );
};

export default Blog;