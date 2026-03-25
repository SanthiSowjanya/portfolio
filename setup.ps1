npx -y create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
Move-Item -Path .\portfolio\* -Destination .\ -Force
Get-ChildItem -Path .\portfolio -Force | Move-Item -Destination .\ -Force
Remove-Item -Path .\portfolio -Recurse -Force
npm install three @react-three/fiber @react-three/drei d3 framer-motion lucide-react clsx tailwind-merge
npm install -D @types/three @types/d3
