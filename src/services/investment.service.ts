import { v4 as uuidv4 } from 'uuid';

export interface Investment {
    id: string;
    name: string;
    amount: number;
    type: string;
    date: string;
}

export class InvestmentService {
    private investments: Investment[] = [];

    async getInvestments(): Promise<Investment[]> {
        return this.investments;
    }

    async getInvestmentById(id: string): Promise<Investment | null> {
        return this.investments.find((inv) => inv.id === id) || null;
    }

    async createInvestment(data: Omit<Investment, 'id' | 'date'>): Promise<Investment> {
        const investment: Investment = {
            id: uuidv4(),
            date: new Date().toISOString(),
            ...data,
        };
        this.investments.push(investment);
        return investment;
    }

    async updateInvestment(id: string, data: Partial<Omit<Investment, 'id' | 'date'>>): Promise<Investment | null> {
        const index = this.investments.findIndex((inv) => inv.id === id);
        if (index === -1) return null;

        this.investments[index] = {
            ...this.investments[index],
            ...data,
        };
        return this.investments[index];
    }

    async deleteInvestment(id: string): Promise<boolean> {
        const initialLength = this.investments.length;
        this.investments = this.investments.filter((inv) => inv.id !== id);
        return this.investments.length !== initialLength;
    }
} 