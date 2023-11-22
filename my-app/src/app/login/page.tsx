import { Button, buttonVariants } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import styles from './styles.module.css'

export default function Login() {

  return (
    <div className={styles.logincontainer}>
      <Card style={{ width: '300px', padding: '20px' }}>
        <h1 className ={styles.font} style={{ textAlign: 'center' }}>Login</h1>
        <form>
          <Input className={styles.maginb}placeholder="Digite seu email" />
          <Input className={styles.maginb}type="password" placeholder="Digite sua senha" />         
          <div className={styles.button}>
            <a href="/dashbord">Login</a>
          </div>
          <div className={styles.button} style={{marginLeft: 106}}>
            <a href="/registro">Cadastro</a>
          </div>
          <div style={{justifyContent: 'center', alignItems:'center', display: 'flex'}}>
            <a href="/recover">Esqueci a Senha</a>
          </div>
        </form>
      </Card>
    </div>
  );
}
