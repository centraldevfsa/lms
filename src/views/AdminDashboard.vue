<template>
  <div class="dashboard flex min-h-screen dark:bg-gray-900 dark:text-gray-200 bg-gray-100 text-gray-800">
    <!-- Sidebar -->
    <aside class="w-64 shadow-lg bg-white dark:bg-gray-800 flex flex-col justify-between min-h-full">
      <div class="p-6">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold">Admin Dashboard</h1>

        </div>
        <nav class="mt-4 text-sm">
          <ul>
            <li>
              <router-link to="/admin/usuarios" class="block py-2 rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-users mr-2"></i>Gerenciar Usuários
              </router-link>
            </li>
            <li>
              <router-link to="/admin/cursos" class="block py-2 rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-book mr-2"></i> Gerenciar Cursos
              </router-link>
            </li>
            <li>
              <router-link to="/admin/relatorios" class="block py-2 rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-chart-line mr-2"></i> Relatórios
              </router-link>
            </li>
            <li>
              <router-link to="/admin/configuracoes" class="block py-2 rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-cog mr-2"></i> Configurações
              </router-link>
            </li>
            <!-- Ações Rápidas -->
            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Ações Rápidas</h3>
              <div class="flex items-center justify-between">
                <ul>
                  <li>
                    <router-link to="/admin/configuracoes"
                      class="block bg-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-md hover:bg-blue-700">
                      Adicionar Curso
                    </router-link>
                  </li>

                  <button class="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700">
                    Enviar Mensagem
                  </button>
                  <button class="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700">
                    Gerar Relatório
                  </button>
                </ul>
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <button @click="handleLogout"
        class="block py-2 px-4 w-full text-left rounded hover:bg-gray-700 hover:text-white mb-4">
        <i class="fas fa-sign-out-alt mr-2"></i> Logout
      </button>
    </aside>

    <!-- Conteúdo principal -->
    <main class="flex-1 p-6">
  <!-- Header com saudação e botões -->
  <div class="mb-6 flex justify-between items-center">
    <div>
      <h2 class="text-2xl font-semibold">Bem-vindo, Administrador!</h2>
      <p class="text-gray-500 dark:text-gray-400">Gerencie seus recursos com eficiência e acompanhe o progresso.</p>
    </div>
    <!-- Botões Toggle e Logout -->
    <div class="flex items-center space-x-4">
      <button
  @click="toggleDarkMode"
  :disabled="toggleDisabled"
  class="p-2 bg-gray-700 text-white rounded-md focus:outline-none"
>
  <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
</button>
      <button @click="handleLogout" class="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
        <i class="fas fa-sign-out-alt mr-2"></i> Logout
      </button>
    </div>
  </div>

      <!-- Cards -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center">
          <h3 class="text-xl font-bold">Total de Alunos</h3>
          <p class="text-3xl font-semibold text-blue-500">{{ stats.totalAlunos }}</p>
        </div>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center">
          <h3 class="text-xl font-bold">Total de Cursos</h3>
          <p class="text-3xl font-semibold text-green-500">{{ stats.totalCursos }}</p>
        </div>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center">
          <h3 class="text-xl font-bold">Taxa de Conclusão</h3>
          <p class="text-3xl font-semibold text-purple-500">{{ stats.taxaConclusao }}%</p>
        </div>
      </section>

      <!-- Relatórios Visuais -->
      <section class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Relatórios Visuais</h3>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
          <canvas id="chart"></canvas>
        </div>
      </section>

      <!-- Gráfico de Receita -->
      <section class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Receita Mensal</h3>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
          <canvas id="chart-receita"></canvas>
        </div>
      </section>

      <!-- Notificações Recentes -->
      <section class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Notificações Recentes</h3>
        <ul class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 space-y-4">
          <li v-for="notificacao in notificacoes" :key="notificacao.id" class="text-sm">
            <i class="fas fa-bell mr-2"></i> {{ notificacao.mensagem }}
          </li>
        </ul>
      </section>

      <!-- Tabela de Alunos Ativos -->
      <section class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Alunos Ativos</h3>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <table class="table-auto w-full">
            <thead class="bg-gray-200 dark:bg-gray-800">
              <tr>
                <th class="px-4 py-2">Nome</th>
                <th class="px-4 py-2">Email</th>
                <th class="px-4 py-2">Progresso</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="aluno in alunos" :key="aluno.email"
                class="odd:bg-gray-100 even:bg-gray-200 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                <td class="px-4 py-2">{{ aluno.nome }}</td>
                <td class="px-4 py-2">{{ aluno.email }}</td>
                <td class="px-4 py-2">{{ aluno.progresso }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "AdminDashboard",
  data() {
    return {
      darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
      menuOpen: true, // Controla o estado do menu lateral
      chartUpdating: false, // Evita cliques rápidos durante a atualização
      chartInstances: {}, // Guarda instâncias de múltiplos gráficos
      toggleDisabled: false, // Controla se o botão de toggle está desativado
      stats: {
        totalAlunos: 200,
        totalCursos: 10,
        taxaConclusao: 75,
      },
      alunos: [
        { nome: "João Silva", email: "joao.silva@example.com", progresso: 85 },
        { nome: "Maria Oliveira", email: "maria.oliveira@example.com", progresso: 90 },
        { nome: "Carlos Souza", email: "carlos.souza@example.com", progresso: 75 },
      ],
      notificacoes: [
        { id: 1, mensagem: "Novo aluno cadastrado." },
        { id: 2, mensagem: "Curso atualizado com sucesso." },
        { id: 3, mensagem: "Relatório gerado." },
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.toggleDisabled = true; // Desativa o botão temporariamente
      this.darkMode = !this.darkMode; // Alterna o estado do modo
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }

      // Atualiza os gráficos
      this.updateCharts();
    },
    handleLogout() {
      localStorage.removeItem("user");
      this.$store.dispatch("logout");
      this.$router.push("/entrar");
    },
    renderChart(chartId, type, labels, datasetLabel, data, colorOptions) {
      if (this.chartInstances[chartId]) {
        this.chartInstances[chartId].destroy();
      }

      this.$nextTick(() => {
        const ctx = document.getElementById(chartId).getContext("2d");
        const isDarkMode = document.documentElement.classList.contains("dark");

        this.chartInstances[chartId] = new Chart(ctx, {
          type: type,
          data: {
            labels: labels,
            datasets: [
              {
                label: datasetLabel,
                data: data,
                borderColor: isDarkMode ? colorOptions.darkBorder : colorOptions.lightBorder,
                backgroundColor: isDarkMode
                  ? colorOptions.darkBackground
                  : colorOptions.lightBackground,
                borderWidth: 2,
              },
            ],
          },
          options: {
            animation: {
              duration: 500, // Duração da animação em milissegundos
              onComplete: () => {
                this.toggleDisabled = false; // Reativa o botão de toggle após a animação
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: isDarkMode ? "#E5E7EB" : "#374151",
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: isDarkMode ? "#E5E7EB" : "#374151",
                },
                grid: {
                  color: isDarkMode ? "#4B5563" : "#D1D5DB",
                },
              },
              y: {
                ticks: {
                  color: isDarkMode ? "#E5E7EB" : "#374151",
                },
                grid: {
                  color: isDarkMode ? "#4B5563" : "#D1D5DB",
                },
              },
            },
          },
        });
      });
    },
    updateCharts() {
      this.renderChart("chart", "bar", ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"], "Novos Alunos", [50, 70, 60, 90, 100], {
        darkBorder: "#6366F1",
        lightBorder: "#4F46E5",
        darkBackground: "rgba(99, 102, 241, 0.5)",
        lightBackground: "rgba(79, 70, 229, 0.5)",
      });

      this.renderChart("chart-receita", "line", ["Jan", "Feb", "Mar", "Apr", "May"], "Receita (R$)", [1000, 2000, 1500, 3000, 2500], {
        darkBorder: "#4F46E5",
        lightBorder: "#10B981",
        darkBackground: "rgba(79, 70, 229, 0.2)",
        lightBackground: "rgba(16, 185, 129, 0.2)",
      });
    },
  },
  mounted() {
    if (this.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    this.updateCharts();
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
}

aside {
  width: 16rem;
}

main {
  flex: 1;
  padding: 1.5rem;
}
</style>
