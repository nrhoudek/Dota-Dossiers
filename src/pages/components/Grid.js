import Card from './Card'
import styles from '@/styles/Grid.module.css'

export default function Grid({ data }) {
    return (
      <div className={styles.grid}>
        {data.map(hero => 
          <Card
            key={hero.id}
            name={hero.localized_name}
            attackType={hero.attack_type}
            primaryAttribute={hero.primary_attr}
            legs={hero.legs}
          />
        )}
      </div>
    )
}