import { defineConfig, configDefaults, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default mergeConfig(
    {
        test: configDefaults,
    },
    defineConfig({
        plugins: [react()],
        test: {
            globals: true,
            environment: 'happy-dom',
            coverage: {
                provider: 'v8',
                enabled: true,
                exclude: ['**/build/**', '**/dist/**', '**/e2e/**', '**/stories/**', '**/*.stories.*'],
            },
            exclude: ['**/e2e/**', '**/build/**'],
        },
    })
);
