import { InvestmentService } from '../services/investment.service';

const investmentService = new InvestmentService();

export const resolvers = {
    Query: {
        investments: async () => {
            return await investmentService.getInvestments();
        },
        investment: async (_, { id }) => {
            return await investmentService.getInvestmentById(id);
        },
    },
    Mutation: {
        createInvestment: async (_, { name, amount, type }) => {
            return await investmentService.createInvestment({ name, amount, type });
        },
        updateInvestment: async (_, { id, ...data }) => {
            return await investmentService.updateInvestment(id, data);
        },
        deleteInvestment: async (_, { id }) => {
            return await investmentService.deleteInvestment(id);
        },
    },
}; 