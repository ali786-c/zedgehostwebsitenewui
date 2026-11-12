import type { AuthPageData } from '../content/auth';
import { Container } from '../components/ui/Container';

/**
 * Standalone client-area pages (login / register / password reset). They keep
 * the legacy form targets, field names and methods; only the presentation is new.
 */
export function AuthPage({ data }: { data: AuthPageData }) {
  return (
    <div className="zh-auth">
      <Container>
        <div className={`zh-auth__card${data.columns === 2 ? ' zh-auth__card--wide' : ''}`}>
          <a className="zh-auth__logo" href="/index.html">
            <img src="/assets/img/logo.png" alt="Zedgehost Logo" width="160" height="54" />
          </a>

          <h2 className="zh-auth__title">{data.title}</h2>

          <form className="zh-auth__form" action={data.form.action} method={data.form.method}>
            <div className={`zh-auth__grid${data.columns === 2 ? ' zh-auth__grid--two' : ''}`}>
              {data.fields.map((field, index) => {
                const id = `auth-field-${index}`;
                return (
                  <p className="zh-auth__field" key={id}>
                    <label htmlFor={id}>{field.label}</label>
                    <input
                      id={id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      autoComplete={
                        field.type === 'password'
                          ? 'current-password'
                          : field.type === 'email'
                            ? 'email'
                            : 'off'
                      }
                    />
                  </p>
                );
              })}
            </div>

            {data.rememberMe && (
              <label className="zh-auth__check" htmlFor={data.rememberMe.id}>
                <input type="checkbox" name={data.rememberMe.name} id={data.rememberMe.id} />
                {data.rememberMe.label}
              </label>
            )}

            {data.forgotLink && (
              <p className="zh-auth__forgot">
                <a href={data.forgotLink.href}>{data.forgotLink.label}</a>
              </p>
            )}

            {data.submit.kind === 'submit' ? (
              <button className="zh-auth__submit" type="submit">
                {data.submit.label}
              </button>
            ) : (
              <a className="zh-auth__submit" href={data.submit.href}>
                {data.submit.label}
              </a>
            )}

            <p className="zh-auth__footer">
              {data.footer.text} <a href={data.footer.href}>{data.footer.label}</a>
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
}
