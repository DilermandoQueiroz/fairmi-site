import React from 'react';

const Blog = ({ children }: { children: React.ReactNode }) => {
    // Wrap each child in a div that controls its maximum width
    const wrappedChildren = React.Children.map(children, child => (
        <div className="w-full md:w-1/3 p-4">
            {child}
        </div>
    ));

    return (
        <div className="w-full flex justify-around items-center flex-wrap">
            {wrappedChildren}
        </div>
    );
};

export default Blog;
