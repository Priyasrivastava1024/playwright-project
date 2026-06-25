import { APIRequestContext } from '@playwright/test';

export class PetApi {
  private baseUrl: string;

  constructor(private request: APIRequestContext) {
    this.baseUrl = process.env.PETSTORE_URL ?? 'https://petstore.swagger.io/v2';
  }

  async createPet(payload: any) {
    return await this.request.post(`${this.baseUrl}/pet`, { data: payload });
  }

  async getPet(id: number) {
    return await this.request.get(`${this.baseUrl}/pet/${id}`);
  }

  async updatePet(payload: any) {
    return await this.request.put(`${this.baseUrl}/pet`, { data: payload });
  }

  async deletePet(id: number) {
    return await this.request.delete(`${this.baseUrl}/pet/${id}`);
  }
}
