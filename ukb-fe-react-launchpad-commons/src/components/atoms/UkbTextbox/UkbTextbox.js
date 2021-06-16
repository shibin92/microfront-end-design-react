import React from 'react';
import parse from 'html-react-parser';

const UkbTextbox = (props) => {
    const handleValue = (event) => {
        props.onChange(event.target.value);
    }
    let formText, label;
    let lableTxt = props.labelTxt || '';
    // let disableField = props.disabled || false;
    let parsedTxt = parse(lableTxt);
    let classNames = `form-control ${props.className}`;
    
    if (props.labelTxt) {
        label = <label className="form-label">{parsedTxt}</label>
    }
    if (props.showTextBelow) {
        formText = <small className="text-muted">{props.yeildTxt}</small>
    }
    return (
      <form>
        <div className="form-group">
            {label}
            <input type="text" className={classNames} onChange={handleValue} disabled={props.disabled} placeholder={props.placeholder}/>
            {formText}
        </div>
      </form>
    )
}

export default UkbTextbox;


{/* // import React from 'react';

// function HelloWorld() {
//     return <h1>Hello World</h1>
// }

// export default HelloWorld; */}

{/* function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  } */}