import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    const hobbyLinks = ["https://organize365.com/", "https://drmindypelz.com/"];

    return(
        <div className="hobbies">
            <h3>Links for My Hobbies</h3>
            <ul>
                <li><label>Personal Organization: <a href = {hobbyLinks[0]}>Organize 365</a></label></li>
                <li><label>Fasting for Women: <a href = {hobbyLinks[1]}>Dr. Mindy Pelz</a></label></li>
            </ul>
        </div>
    )
}