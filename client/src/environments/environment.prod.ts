export const environment = {
  production: true,
  contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self'",
    'img-src': "'self'",
    'report-uri': "'localhost'",
    'style-src': "'self' 'unsafe-inline'",
    'frame-src': "'none'"
  }
};
