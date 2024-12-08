import React from 'react';
import bg from '../../src/assets/bg.jpg';

const Section2 = () => {
    return (
        <section
            className="section2 py-16 border-2 border-black"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto text-center opacity-0 motion-safe:animate-fadeIn">
                <h2 className="text-4xl font-bold text-white mb-6 transform transition-all motion-safe:hover:scale-105 motion-safe:duration-500">
                    Welcome to Chill Gaming - Discover the Best Games for You
                </h2>
                <p className="text-lg text-white mb-10 motion-safe:animate-fadeIn motion-safe:duration-500">
                    Whether you're looking for an action-packed adventure or a relaxing puzzle, we have the best games curated for you. Explore a variety of genres and find your next favorite game.
                </p>
                <p className="text-md text-white mb-8 motion-safe:animate-fadeIn motion-safe:duration-500">
                    Our collection is handpicked to ensure you experience the best of gaming, with games of every genre ranging from heart-pumping action to relaxing, mind-bending puzzles. Dive into new worlds and embark on epic adventures right from the comfort of your home.
                </p>
                <p className="text-lg text-white mb-10 motion-safe:animate-fadeIn motion-safe:duration-500">
                    Browse through our game categories and find the perfect game for your mood and interests. Whether it's strategy, fantasy, or simulation, we have something for everyone.
                </p>
            </div>
        </section>
    );
};

export default Section2;
