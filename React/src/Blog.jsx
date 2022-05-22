import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/hoge';


const Blog = () => {

    // componentDidUpdate() {
    //     if (this.state.count >= 10) {
    //         this.setState({count: 0});
    //     }
    // }
    
    return (
        <>
            <Article
                title={"Reactの使い方"}
                // count={this.state.count}
                />
            <FooBar.Foo />
            <FooBar.Bar />
            <Hoge />
        </>
    )
}

export default Blog