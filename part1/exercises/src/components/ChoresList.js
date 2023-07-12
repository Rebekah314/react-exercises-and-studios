import classes from './ChoresList.module.css';

export default function ChoresList () {
   return( 
   <div>
      <h3 className = {classes.choresHeading}>
         Chores I Love to Do
      </h3>
      <p className = {classes.choresText}>
         <ol>
            <li>Run the dishwasher</li>
            <li>Feed the kids</li>
            <li>Walk the dog</li>
         </ol>
      </p>;
   </div>
   );
}