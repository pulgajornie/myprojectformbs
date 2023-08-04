import { useState } from 'react';
import styles from './App.module.scss';
import { Label } from './components/label/label';
import { Input } from './components/input/input';
import { SubmitButton } from './components/submit-button/submit-button';
import Classnames from 'classnames';
import Input_module from './components/input/input.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <h1>Contact Us</h1>
            <h2></h2>Have a question? Fill out the form below and we&apos;ll get{' '}
            <h3 className={Input_module.root}>back to you as soon as we can.</h3>
            <form>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" />
                <Label htmlFor="message">Message</Label>
                <Input id="message" name="message" />
                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    );
}

export default App;
