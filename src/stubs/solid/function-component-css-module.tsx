import { Component } from "solid-js";
import styles from "./ComponentName.module.css";

interface ComponentNameProps { }

const ComponentName: Component<ComponentNameProps> = () => {
	return <div class={styles.ComponentName}>Hello ComponentName</div>;
};

export default ComponentName;
