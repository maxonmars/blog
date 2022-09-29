import module from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
const [collapsed, setCollapsed] = useState(true);

const onToggle = () => {
  setCollapsed(prevState => !prevState);
}
    return (
        <div className={classNames([module.sidebar, className], {[module.collapsed]: collapsed})}>
            <button onClick={onToggle}>collapse</button>
            <ThemeSwitcher/>
        </div>
    );
};