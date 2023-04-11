import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RiMenu3Line } from 'react-icons/ri';
import { navLinks } from '../../utils';

const Nav = () => {

    const [ isToggled, setIsToggled ] = useState( false );
    
    const location = useLocation();
    
    const [ active, setActive ] = useState( "" );


    let requiredLinks;

    switch (location.pathname === "/") {
        case true:
            requiredLinks = navLinks.filter(link => link.id !== "/")
            break;
        case false:
            requiredLinks = navLinks;
            break;
    }


    useEffect( () => {
        if (location.pathname === "/") {
            setActive( location.pathname );
        }
        else {
            setActive( location.pathname.split('/').join('') );
        }
    }, [])
    


    useEffect( () => {
        window.addEventListener( 'scroll', () => {
            const nav = document.querySelector( 'nav' );
            switch ( window.scrollY > 10 ) {
                case true:
                    if ( nav.classList.contains( 'bg-[#F9F9FF]' ) ) {
                        nav.classList.add( 'bg-[#FFFFFF]' );
                        nav.classList.add( 'drop-shadow-lg' );
                    };
                    break;
                case false:
                    nav.classList.replace( 'bg-[#FFFFFF]', 'bg-[#F9F9FF]' );
                    nav.classList.remove( 'drop-shadow-lg' );
                    break;
            };
        }, [] );
    } );

    return (
        <nav className='py-4 sticky top-0 ease-in-out duration-300 bg-[#F9F9FF]'>
            <div className='w-11/12 md:w-[85%] lg:w-[70%] flex items-center justify-between mx-auto'>
                <Link
                    to="/"
                    onClick={ () => { setActive( "/" ); setIsToggled( false ); } }
                >
                    <h2 className='font-bold text-[#1A1919] text-2xl md:text-3xl'>Job Insights</h2>
                </Link>

                <div className='hidden md:flex items-center justify-center gap-8'>
                    { requiredLinks.map( link => {
                        return (
                            <Link
                                key={ link.id }
                                onClick={() => setActive(link.id)}
                                className={
                                    `${ active === link.id && "bg-gradient-to-r text-transparent"} text-[#757575] font-semibold hover:font-bold hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text hover:text-transparent ` }
                                to={ link.id !== '/' ? `/${ link.id }` : `${ link.id }` }
                            >
                                { link.title }
                            </Link>
                        );
                    } ) }
                </div>

                <a href='#featured-jobs' className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-sm md:text-xl font-semibold p-2 md:py-5 md:px-7 rounded-md md:rounded-lg'>
                    Start Applying
                </a>

                <button className='md:hidden' onClick={() => setIsToggled(!isToggled)}>
                    <RiMenu3Line size={ 28 } />
                </button>

                <div
                    className={ `${ isToggled ? "flex" : "hidden"} flex-col md:hidden gap-[1px] justify-center rounded fixed top-[4.5rem] right-2 overflow-hidden drop-shadow-2xl duration-500 ease-in-out`}>
                    { requiredLinks.map( link => {
                        return (
                            <Link
                                key={ link.id }
                                onClick={ () => {setActive( link.id ); setIsToggled(false)} }
                                className={
                                    `${ link.id === active ? "text-white" : "text-[#cdcdcd]"} font-semibold bg-gradient-to-l from-[#7E90FE] to-[#9873FF] py-4 px-8` }
                                to={ link.id !== '/' ? `/${ link.id }` : "/" }
                            >
                                { link.title }
                            </Link>
                        );
                    } ) }
                </div>

            </div>

        </nav>
    );
};

export default Nav;