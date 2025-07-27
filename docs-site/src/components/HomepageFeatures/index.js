import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Base de datos MySQL',
        Svg: require('@site/static/img/database.svg').default,
        description: (
            <>
                Base de datosMySQL, la cual  permite almacenar, consultar y administrar datos de forma confiable y con alto rendimiento.
            </>
        ),
    },
    {
        title: 'Backend con Java y Spring Boot',
        Svg: require('@site/static/img/backend.svg').default,
        description: (
            <>
                Backend hecho con Spring Boot, pues simplifica el desarrollo del backend en Java, facilitando APIs robustas y escalables.
            </>
        ),
    },
    {
        title: 'Frontend con Angular',
        Svg: require('@site/static/img/frontend.svg').default,
        description: (
            <>
                Frontend hecho con Angular, ya que estructura el desarrollo del frontend con componentes reutilizables y un lenguaje más robusto que javascript.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}