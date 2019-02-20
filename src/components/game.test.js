import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';



describe('<Game />', ()=>{
    //smoke test
    it('Should load and not crash', ()=> {
        shallow(<Game />);
    })
    //props and states
    it('')
    
    //callbacks and events



})