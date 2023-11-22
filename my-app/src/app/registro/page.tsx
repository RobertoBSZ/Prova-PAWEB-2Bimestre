import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import styles from './styles.module.css'

export default function registro() {
  return (
    <div className={styles.logincontainer}>
      <Card style={{ width: '300px', padding: '20px' }}>
        <h1 className={styles.font} style={{ textAlign: 'center' }}>
          Registrar
        </h1>
        <form>
          <Input
            className={styles.maginb}
            type="text"
            name="username"
            placeholder="Digite seu nome de usuário"
          />
          <Input
            className={styles.maginb}
            type="email"
            name="email"
            placeholder="Digite seu email"
          />
          <Input
            className={styles.maginb}
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            className={styles.maginb}
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
          />
          <div className={styles.button}>
            <a href="/login">Login</a>
          </div>
        </form>
      </Card>
    </div>
  );
}
