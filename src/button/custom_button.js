// Create a button in a separate file .
// Using this same button creates two different buttons .
// Pass prop data to button = {
// 	buttonText ,
// 	buttonStyle ,
// 	onClick Function
// }
// Button 1 -/> color white , background red , on click give alert ‘i am button 1 clicked’ .
// Button 2 -/> color white , background blue, on click give alert ‘i am button 2 clicked’

export function CustomButton({ buttonText, buttonStyle, onClick }) {
  return (
    <>
      <button onClick={onClick} className={buttonStyle}>
        {buttonText}
      </button>
    </>
  );
}
