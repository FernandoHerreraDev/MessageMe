class SessionsController < ApplicationController

    before_action :log_in_redirect, only: [:new, :create]
    def new

    end

    def create
        user = User.find_by(email: params[:session][:email].downcase)
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            redirect_to root_path
        else
            flash.now[:alert] = "Theres some issue with the login"
            render 'new'
           
        end
    end

    def destroy
        session[:user_id] = nil
        flash[:notice] = "logged out"
        redirect_to login_path
    end

    private

    def log_in_redirect
        if log_in?
            flash[:error] = "Ya estas logeado"
            redirect_to root_path
        end
    end
    
end