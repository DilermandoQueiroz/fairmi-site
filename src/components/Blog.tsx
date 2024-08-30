import React from 'react';

const Blog = ({ children }: { children: React.ReactNode }) => {
    // Wrap each child in a div that controls its maximum width and responsiveness
    const wrappedChildren = React.Children.map(children, child => (
        <div className="p-4 pb-[100px]">
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