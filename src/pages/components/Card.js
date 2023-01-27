import styles from '@/styles/Card.module.css'

export default function Card(props) {
	const { name, attackType, primaryAttribute, legs} = props
	return (
		<div className={styles.card}>
			<h2>{name}</h2>
			<p>{attackType}</p>
			<p>{primaryAttribute}</p>
			<p>Legs: {legs}</p>
		</div>
	)
}