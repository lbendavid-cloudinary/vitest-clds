import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import {Typography} from "@clds/typography";

describe('AssetCard', () => {
    it('should display error card when error property is set', async () => {
        const screen = render(<Typography/>);
    });
});
