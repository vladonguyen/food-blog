import About from './About';
import {render, screen} from '@testing-library/react';



test('Always true test', ()=>{
    expect(true).toBe.true;
});

test('Heading should be Vite + React', ()=> {
    render(<About />);
   const headingElement = screen.getByText('Who we are and what we do?');
   expect(headingElement).toBeInTheDocument();
})