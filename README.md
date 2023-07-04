# bluefeet.dev

This app generates a static web site which is hosted on [bluefeet.dev](https://bluefeet.dev).

```shell
# Start the development server
npm run dev

# Generate a static build in the out/ folder
npm run build

# Generate public/resume.json and types/Resume.d.ts
npm run build-resume
```

# Notes

## Quoted Dates

The dates in `public/resume.yaml` are quoted so that when the YAML is converted to JSON by `yq` the dates are left as strings rather then being converted to full ISO-8601 timestamps in the UTC timezone which would be incorrect when displaying these dates on the frontend (except in the case where the end user is in UTC).
