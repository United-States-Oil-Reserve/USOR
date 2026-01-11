use anchor_lang::prelude::*;

declare_id!("USOn1terna11111111111111111111111111111111");

#[program]
pub mod uso_solana {
    use super::*;

    pub fn initialize_reserve(ctx: Context<InitializeReserve>, initial_allocation: u64) -> Result<()> {
        let reserve = &mut ctx.accounts.reserve;
        reserve.total_allocation = initial_allocation;
        reserve.last_pulse = Clock::get()?.unix_timestamp;
        reserve.authority = ctx.accounts.authority.key();
        Ok(())
    }

    pub fn pulse_update(ctx: Context<PulseUpdate>, new_allocation: u64) -> Result<()> {
        let reserve = &mut ctx.accounts.reserve;
        reserve.total_allocation = new_allocation;
        reserve.last_pulse = Clock::get()?.unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeReserve<'info> {
    #[account(init, payer = authority, space = 8 + 8 + 8 + 32)]
    pub reserve: Account<'info, ReserveState>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct PulseUpdate<'info> {
    #[account(mut, has_one = authority)]
    pub reserve: Account<'info, ReserveState>,
    pub authority: Signer<'info>,
}

#[account]
pub struct ReserveState {
    pub total_allocation: u64,
    pub last_pulse: i64,
    pub authority: Pubkey,
}
