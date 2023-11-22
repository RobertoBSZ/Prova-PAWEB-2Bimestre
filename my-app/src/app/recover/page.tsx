import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import styles from './styles.module.css';

export default function Recover() {

  return (
    <div className={styles.logincontainer}>
      <Card style={{ width: '300px', padding: '20px' }}>
        <h1 className={styles.font} style={{ textAlign: 'center' }}>
          Recuperar Senha
        </h1>
        <form>
          <Input
            className={styles.maginb}
            type="email"
            placeholder="Digite seu email"
          />
          <div className={styles.button}>
            <a href="/login">Recuperar minha senha</a>
          </div>
        </form>
      </Card>
    </div>
  );
}
