class TodosController < ApplicationController
    def index
        @todos = Todo.all
    end

    def show 
        @todo = Todo.find(params[:id])
    end
end
